import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  PanelTop,
  Plus,
  Star,
  UserPlus,
  Users,
  X,
} from 'lucide-react';

type IconName =
  | 'home'
  | 'users'
  | 'calendar'
  | 'user-plus'
  | 'mail'
  | 'instagram'
  | 'linkedin'
  | 'clock'
  | 'map-pin'
  | 'menu'
  | 'close'
  | 'arrow-up-right'
  | 'chevron-down'
  | 'plus'
  | 'star'
  | 'chalkboard'
  | 'mentorship'
  | 'projects'
  | 'community';

type IconProps = { name: IconName; size?: number; strokeWidth?: number };

const icons = {
  home: Home,
  users: Users,
  calendar: CalendarDays,
  'user-plus': UserPlus,
  mail: Mail,
  instagram: Instagram,
  linkedin: Linkedin,
  clock: Clock3,
  'map-pin': MapPin,
  menu: Menu,
  close: X,
  'arrow-up-right': ArrowUpRight,
  'chevron-down': ChevronDown,
  plus: Plus,
  star: Star,
  chalkboard: PanelTop,
  mentorship: Users,
  projects: Network,
  community: Users,
} as const;

export function Icon({ name, size = 18, strokeWidth = 1.35 }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} />;
}
