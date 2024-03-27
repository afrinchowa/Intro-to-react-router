const Details = () => {
  return (
    <div className="hero h-Auto w-auto bg-slate-100">
      <div className="hero-content bg-slate-200 p-16 flex-col gap-12 lg:flex-row">
        <img
          src="https://i.ibb.co/vhRvWrJ/Frankenstein.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="" >
          <h1 className="text-5xl font-bold mb-3">BookName:</h1>
          <h2 className="p-2 border-y-2 border-slate-400">Author:</h2>
          <h2 className="p-2 border-y-2 border-slate-400">Category:</h2>
          <p className="py-6 px-2">Review:</p>
          <div className="p-2">
          <h2>Tags:</h2>
          <h2>TotalPage:</h2>
          <h2>Publisher:</h2>
          <h2>Year Of Publishing:</h2>
          <h2>Rating:</h2>
          </div>
          <button className=" mt-4 btn btn-accent mr-5">Read</button>
          <button className=" btn btn-outline">WishList </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
