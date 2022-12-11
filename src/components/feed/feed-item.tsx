import type { User } from "next-auth"
import { Avatar } from "../ui/images"

export interface FeedItemProps {
  user: User
}

const FeedItem: React.FC<FeedItemProps> = ({ user }) => {
  return (
    <div className="flex gap-4 mb-4">
      <Avatar seed={user.name as string} ring className="flex-none rounded-md" />
      <div className="grow w-full prose text-base-500 max-w-none p-4 bg-base-500/10">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsam aut omnis soluta corporis quam nemo eligendi enim numquam fuga?</p>
      </div>
    </div>
  )
}

export default FeedItem