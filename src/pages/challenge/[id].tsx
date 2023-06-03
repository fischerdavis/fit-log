import { useRouter } from "next/router";
import { api } from "@/utils/api";

const Challenge = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: challengeInfo = [], isLoading } =
    api.challenge.getChallengeInfo.useQuery({
      id: id ? id : "",
    });

  const utils = api.useContext();

  if (isLoading) return <>Loading...</>;

  return <div></div>;
};

export default Challenge;
