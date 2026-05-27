import {
  DoodleLock,
  DoodleDrop,
  DoodleLipstick,
  DoodleMirror,
  DoodleShield,
  DoodleTeacup,
} from "../../components/Doodles";
import type { Illustration } from "../guidesData";

type DoodleComponent = ({ className }: { className?: string }) => React.JSX.Element;

const map: Record<Illustration, DoodleComponent> = {
  lock: DoodleLock,
  drop: DoodleDrop,
  lipstick: DoodleLipstick,
  mirror: DoodleMirror,
  shield: DoodleShield,
  teacup: DoodleTeacup,
};

export function GuideDoodle({
  illustration,
  className = "",
}: {
  illustration: Illustration;
  className?: string;
}) {
  const Doodle = map[illustration] ?? DoodleShield;
  return <Doodle className={className} />;
}
