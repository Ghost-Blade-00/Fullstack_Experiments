import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="container mt-4">
      <h2 className="text-center">Experiment-2.1: Learning about Bootstrap</h2>
      <div className="card p-3 mt-3">
         <label className="form-label">Name</label>
        <input className="form-control" placeholder="Enter name" />
        <label className="form-label mt-3">Email</label>
        <input className="form-control" placeholder="Enter email" />
        <label className="form-label mt-3">Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      <button className="btn btn-primary mt-3">Submit</button>
      <button className="btn btn-secondary mt-3 ">Reset</button>
      </div>
      
    </div>
  );
}

export default App