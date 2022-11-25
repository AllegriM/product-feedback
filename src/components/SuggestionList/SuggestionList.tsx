import { Link } from 'react-router-dom';
import products from '../../api/data.json';
import AddFeedback from '../AddFeedback/AddFeedback';
import ArrowUp from '../Icons/ArrowUp';
import Comments from '../Icons/Comments';
import EmptyContent from '../Icons/EmptyContent';

function SuggestionList() {
  return (
    <ul className="grid col-span-12 p-6 h-full">
      {products.productRequests ? (
        products.productRequests.map((product) => {
          return (
            <Link key={product.id} to={product.id.toString()}>
              <li className="p-4 bg-white text-left text-darkBlueXs mb-6 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">{product.title}</h4>
                <p className="mb-3">{product.description}</p>
                <span className="bg-whiteash text-darkBlue p-2 rounded-md font-bold">
                  {product.category.charAt(0).toUpperCase() + product.category.substring(1, product.category.length)}
                </span>
                <div className="flex justify-between mt-4">
                  <button className="flex items-center gap-2 bg-whiteash px-2 rounded-md">
                    <ArrowUp />
                    <p className="mt-1 text-black font-bold">{product.upvotes}</p>
                  </button>
                  <div
                    className={`${!product.comments?.length ? 'opacity-50' : 'opacity-100'} flex items-center gap-2`}
                  >
                    <Comments />
                    <p className="mt-1 font-bold">{product.comments?.length ? product.comments?.length : 0}</p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })
      ) : (
        <div className="bg-whiteash h-full flex flex-col items-center">
          <EmptyContent />
          <h2 className="text-darkBlueXs font-bold text-2xl">There is no feedback yet.</h2>
          <p className="text-darkBlueXs">
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </p>
          <div className="">
            <AddFeedback />
          </div>
        </div>
      )}
    </ul>
  );
}

export default SuggestionList;
