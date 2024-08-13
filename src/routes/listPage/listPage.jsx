import "./listPage.scss";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react"; 
import { listData } from "../../lib/dummydata";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense> */}
        </div>
      </div>
      <div className="mapContainer">
        {/* <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense> */}
        <Map items={data}/>
      </div>
    </div>
  );
}

export default ListPage;


