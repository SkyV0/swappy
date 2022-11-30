import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react';

export const StatisticsCard = (
  props: WithChildrenProps<StatisticsCardProps>
) => {
  const { color, title, icon, footer, value, } = props;
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

StatisticsCard.defaultProps = {
  color: 'blue',
  footer: null
};

export interface StatisticsCardProps {
  color: 'white';
  'blue-gray';
  gray;
  brown;
  'deep-orange';
  orange;
  amber;
  yellow;
  lime;
  'light-green';
  green;
  teal;
  cyan;
  'light-blue';
  blue;
  indigo;
  'deep-purple';
  purple;
  pink;
  red;
  icon: PropTypes.node.isRequired;
  title: PropTypes.node.isRequired;
  value: PropTypes.node.isRequired;
  footer: PropTypes.node;
}

StatisticsCard.displayName = '/src/widgets/cards/statistics-card.jsx';

export default StatisticsCard;
