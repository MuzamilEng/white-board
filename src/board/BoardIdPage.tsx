import { Room } from "@/components/room";

import { Canvas } from "./Components/Canvas";
import { Loading } from "./Components/Loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
