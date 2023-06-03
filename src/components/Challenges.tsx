import { api } from "@/utils/api";
import Link from "next/link";

const Challenges = () => {
  const { data: challenges = [], isLoading: isChallengesLoading } =
    api.challenge.getAll.useQuery();

  if (isChallengesLoading) return <>Loading...</>;

  return (
    <div>
      {challenges.map((ch) => (
        <div
          key={ch.id}
          className="mt-2 rounded-md border border-slate-200 p-2"
        >
          <div className="flex gap-20">
            <div>{ch.name}</div>
            <div>
              <Link
                className="hover:text-blue-500 hover:underline"
                href={`/challenge/${ch.id}`}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
