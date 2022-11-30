import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from '@material-tailwind/react';

export const ProfileInfoCard = (
  props: WithChildrenProps<ProfileInfoCardProps>
) => {
  const { title, action, description, details } = props;
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        {action}
      </CardHeader>
      <CardBody className="p-0">
        {description && (
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            {description}
          </Typography>
        )}
        {description && details ? (
          <hr className="my-8 border-blue-gray-50" />
        ) : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold capitalize"
                >
                  {el}:
                </Typography>
                {typeof details[el] === 'string' ? (
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {details[el]}
                  </Typography>
                ) : (
                  details[el]
                )}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
};

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {}
};

export interface ProfileInfoCardProps {
  title: PropTypes.string.isRequired;
  description: PropTypes.node;
  details: PropTypes.object;
}

ProfileInfoCard.displayName = '/src/widgets/cards/profile-info-card.jsx';

export default ProfileInfoCard;
