import { Avatar, Typography, Image } from '@material-tailwind/react';

export const MessageCard = (props: WithChildrenProps<MessageCardProps>) => {
  const { message, action } = props;
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={Image}
          alt={name}
          className="shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {name}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
};

MessageCard.defaultProps = {
  action: null
};

export interface MessageCardProps {
  img: PropTypes.string.isRequired;
  name: PropTypes.string.isRequired;
  message: PropTypes.node.isRequired;
  action: PropTypes.node;
}

MessageCard.displayName = '/src/widgets/cards/message-card.jsx';

export default MessageCard;
