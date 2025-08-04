export default function Form() {
  return (
    <form className="form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label mr-3">
          Name
        </label>
        <input id="name" type="text" className="form-control input" />
      </div>

      <div className="mb-3">
        <label htmlFor="Age" className="form-label mr-3">
          Age
        </label>
        <input id="age" type="number" className="form-control input" />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
