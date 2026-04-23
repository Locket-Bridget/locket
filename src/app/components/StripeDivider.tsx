// Maria Mack / Bass River style horizontal stripe divider

type StripeDividerProps = {
  height?: number;
};

export default function StripeDivider({ height = 20 }: StripeDividerProps) {
  return (
    <div
      className="w-full"
      style={{
        height: `${height}px`,
        background: `repeating-linear-gradient(
          90deg,
          #1E3A8A   0px,  #1E3A8A   60px,
          #C8553D   60px, #C8553D  120px,
          #fff8ea  120px, #fff8ea  180px,
          #93c5fd  180px, #93c5fd  240px
        )`,
      }}
    />
  );
}
