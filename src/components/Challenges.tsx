import {api} from "@/utils/api";

const Challenges = () => {
    const { data: challenges = [], isLoading: isChallengesLoading } = api.challenge.getAll.useQuery();

    if (isChallengesLoading) return <>Loading...</>;
    return (
        <div>
            Hello
            {
                challenges.map((ch) => <>{ch.name}</>)
            }
        </div>
    );
};

export default Challenges;