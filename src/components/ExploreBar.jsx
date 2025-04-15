import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function ExploreBar() {
  return (
    <>
      <div className="w-1/3 h-screen bg-black pt-7 pl-10 pr-10 pb-7 overflow-auto flex flex-col gap-5 text-white">

        <div className="border border-slate-500 rounded-xl p-5">
          <p className="font-bold text-2xl mb-3">Subscribe to Premium</p>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button className="bg-blue-500 pl-3 pr-3 pt-2 pb-2 rounded-full font-semibold text-white mt-4">
            Subscribe
          </button>
        </div>

        <div className="border border-slate-500 rounded-xl p-5">
          <p className="font-bold text-2xl pb-2 mb-3">What's Happening</p>
          <ExploreTerm />
          <ExploreTerm />
          <ExploreTerm />
          <ExploreTerm />
        </div>

        <div className="border border-slate-500 rounded-xl p-5">
          <p className="font-bold text-2xl pb-2 mb-3">Who to follow</p>
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <p className="text-blue-500">Show more</p>
        </div>
      </div>
    </>
  );
}

export default ExploreBar;

function FollowCard() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <p>Name</p>
        <p>@username</p>
      </div>
      <button className="bg-white pl-3 pr-3 pt-2 pb-2 rounded-full font-semibold text-black">
        Follow
      </button>
    </div>
  );
}

function ExploreTerm() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Category</p>
        <p className="text-lg font-semibold">#Term</p>
      </div>
      <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
    </div>
  );
}
