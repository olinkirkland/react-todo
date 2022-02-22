import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="container border bg-light p-4 m-4">
        {/* <h1 class="display-1">Hallo, Welt!</h1> */}
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Enter text here"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
