import { useSearchParams } from "react-router-dom";

const Success = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  let session_id = searchParams.get("session_id")
  console.log(searchParams.get("session_id"))

  return (
    <>
      <section>
        <div class="product Box-root">
          <div class="description Box-root">
            <h3>Checkout successful!</h3>
          </div>
        </div>        
      </section>
    </>
  )
}


export default Success