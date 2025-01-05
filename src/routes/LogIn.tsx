const LogIn = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-white text-dark"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-dark-50 mb-4">
                    Please enter your login and password!
                  </p>
                  <div
                    data-mdb-input-init
                    className="form-outline form-white mb-2"
                  >
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>
                  <div
                    data-mdb-input-init
                    className="form-outline form-white mb-2"
                  >
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  <p className="small mb-2 pb-lg-2">
                    <a className="text-dark-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <button className="btn btn-primary btn-lg px-5" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
