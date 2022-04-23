type SVGType = 'stroke' | 'fill';

export type SVGIconProps = {
  SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  type: SVGType;
  className?: string;
  props?: React.SVGAttributes<SVGElement>;
};
