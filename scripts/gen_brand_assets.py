#!/usr/bin/env python3
"""Generate logo.png and og-image.png from in-repo brand assets.

Text is rendered in Titan One — the same display font the landing page uses
(next/font/google) — vendored as a TTF in scripts/fonts. Glyphs are converted
to vector paths so rendering does not depend on any installed font. SVGs are
emitted to /tmp and rasterized to public/ by the companion node script.
"""
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# Modak — heavy rounded display face used for the LOCKET wordmark.
# Titan One — landing-page display font (next/font/google), vendored for reuse.
FONTS = {
    "modak": os.path.join(ROOT, "public/fonts/Modak-Regular.ttf"),
    "titan": os.path.join(ROOT, "scripts/fonts/TitanOne-Regular.ttf"),
}

BLUE = "#1E3A8A"
CREAM = "#fff8ea"


class Face:
    def __init__(self, path):
        self.font = TTFont(path)
        self.glyphset = self.font.getGlyphSet()
        self.cmap = self.font.getBestCmap()
        self.upm = self.font["head"].unitsPerEm
        self.hmtx = self.font["hmtx"]


_faces = {k: Face(v) for k, v in FONTS.items()}


def text_path(s, size, x, y, fill, anchor="start", letter_spacing=0.0, font="titan"):
    """Return an SVG <path> placing string `s` with baseline at (x, y).

    Glyph outlines are flipped (font y-up -> svg y-down) and scaled to `size`.
    `anchor` is start | middle | end. `letter_spacing` is in em units.
    """
    face = _faces[font]
    scale = size / face.upm
    ls = letter_spacing * size
    # measure
    total = 0.0
    glyphs = []
    for ch in s:
        gname = face.cmap.get(ord(ch))
        if gname is None:
            gname = face.cmap.get(ord(" "))
        adv = face.hmtx[gname][0]
        glyphs.append((gname, adv))
        total += adv * scale + ls
    total -= ls  # no trailing space after last glyph

    if anchor == "middle":
        cursor = x - total / 2
    elif anchor == "end":
        cursor = x - total
    else:
        cursor = x

    parts = []
    for gname, adv in glyphs:
        pen = SVGPathPen(face.glyphset)
        face.glyphset[gname].draw(pen)
        d = pen.getCommands()
        if d:
            # translate to cursor, flip vertically around baseline y
            parts.append(
                f'<g transform="translate({cursor:.2f} {y:.2f}) scale({scale:.5f} {-scale:.5f})">'
                f'<path d="{d}" fill="{fill}"/></g>'
            )
        cursor += adv * scale + ls
    return "".join(parts), total


# --- locket mark (from favicon.svg, viewBox 0 0 24 24) ---
OUTER = "M12 2a6 6 0 0 0-6 6v2.4a7.9 7.9 0 0 0-2.4 5.6c0 4.4 3.6 8 8.4 8s8.4-3.6 8.4-8a7.9 7.9 0 0 0-2.4-5.6V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v1.5a7.9 7.9 0 0 0-8 0V8a4 4 0 0 1 4-4z"
HEART = "M12 13.3l-1.45-1.32a1.5 1.5 0 1 0-2.1 2.14l3.55 3.41 3.55-3.41a1.5 1.5 0 1 0-2.1-2.14L12 13.3z"


def mark(cx, cy, size, lock_fill, heart_fill):
    """Locket mark centered at (cx, cy), drawn at `size` px square."""
    s = size / 24.0
    x = cx - size / 2
    y = cy - size / 2
    return (
        f'<g transform="translate({x:.2f} {y:.2f}) scale({s:.5f})">'
        f'<path d="{OUTER}" fill="{lock_fill}"/>'
        f'<g transform="translate(-2.5 0) scale(1.2)"><path d="{HEART}" fill="{heart_fill}"/></g>'
        f"</g>"
    )


def star(cx, cy, r, fill, opacity=1.0):
    """Simple 4-point sparkle."""
    d = (
        f"M{cx:.1f} {cy-r:.1f} "
        f"C{cx+r*0.18:.1f} {cy-r*0.18:.1f} {cx+r*0.18:.1f} {cy-r*0.18:.1f} {cx+r:.1f} {cy:.1f} "
        f"C{cx+r*0.18:.1f} {cy+r*0.18:.1f} {cx+r*0.18:.1f} {cy+r*0.18:.1f} {cx:.1f} {cy+r:.1f} "
        f"C{cx-r*0.18:.1f} {cy+r*0.18:.1f} {cx-r*0.18:.1f} {cy+r*0.18:.1f} {cx-r:.1f} {cy:.1f} "
        f"C{cx-r*0.18:.1f} {cy-r*0.18:.1f} {cx-r*0.18:.1f} {cy-r*0.18:.1f} {cx:.1f} {cy-r:.1f} Z"
    )
    return f'<path d="{d}" fill="{fill}" opacity="{opacity}"/>'


def build_logo():
    W = H = 600
    wm, _ = text_path("LOCKET", 132, W / 2, 500, BLUE, anchor="middle", font="modak")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
<rect width="{W}" height="{H}" rx="96" fill="{CREAM}"/>
{mark(W/2, 240, 250, BLUE, CREAM)}
{wm}
</svg>'''


def build_og():
    W, H = 1200, 630
    stars = "".join([
        star(120, 120, 16, CREAM, 0.5),
        star(1080, 90, 22, CREAM, 0.45),
        star(1010, 250, 12, CREAM, 0.4),
        star(150, 470, 14, CREAM, 0.4),
        star(1090, 520, 18, CREAM, 0.5),
        star(70, 300, 10, CREAM, 0.35),
    ])
    # Modak wordmark, auto-fit to a max width so it never runs off the card.
    max_w = 1040
    wm_size = 150
    _, w = text_path("LOCKET SECURITY", wm_size, W / 2, 0, CREAM, anchor="middle", font="modak")
    if w > max_w:
        wm_size = wm_size * max_w / w
    wm, _ = text_path("LOCKET SECURITY", wm_size, W / 2, 400, CREAM, anchor="middle", font="modak")
    slogan, _ = text_path("Cyber care is self care.", 58, W / 2, 495, "#bcd0f5", anchor="middle")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
<rect width="{W}" height="{H}" fill="{BLUE}"/>
{stars}
{mark(W/2, 185, 160, CREAM, BLUE)}
{wm}
{slogan}
</svg>'''


os.makedirs("/tmp/brand", exist_ok=True)
with open("/tmp/brand/logo.svg", "w") as f:
    f.write(build_logo())
with open("/tmp/brand/og-image.svg", "w") as f:
    f.write(build_og())
print("wrote /tmp/brand/logo.svg and /tmp/brand/og-image.svg")
