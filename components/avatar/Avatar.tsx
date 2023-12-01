import Image from "next/image";
import defaultAvatar from "./default_avatar.jpg";

type Props = {
  avatarUrl?: string;
  width?: string;
  height?: string;
  id?: string;
};

const Avatar = ({
  avatarUrl = "/default_avatar.jpg",
  width = "w-12",
  height = "h-12",
  id,
}: Props) => {
  return (
    <span className={`${width} ${height} rounded-full relative block`} id={id}>
      <Image
        src={avatarUrl}
        alt="avatar"
        width={250}
        height={250}
        className="inline-block h-full w-full rounded-full object-cover"
        id={id}
      />
    </span>
  );
};

export default Avatar;
