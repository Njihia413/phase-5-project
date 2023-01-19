const navigate = useNavigate()
    function logout() {
        fetch("/users/sign_out", {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((json) => Promise.reject(json));
            }
          })
          .then((json) => {
            console.dir(json);
          })
          .catch((err) => console.error(err));
          navigate ('/login')
        }