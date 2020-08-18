const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      articles: [],
      name: "",
      lastName: "",
      email: "",
      phone: "",
    },
    actions: {
      handleChange: (e) => {
        setStore({ [e.target.name]: e.target.value });
      },

      handleSubmit: async (e) => {
        e.preventDefault();
        const store = getStore();
        let formData = new FormData();
        formData.append("firstname", store.name);
        formData.append("lastname", store.lastName);
        formData.append("email", store.email);
        formData.append("phone", store.phone);
        await fetch(
          "https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => console.log("Funciona"));
      },

      getArticles: async () => {
        await fetch(
          "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles",
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => setStore({ articles: response }));
      },

      getFilteredArticles: async (e) => {
        const params = e.target.id;

        await fetch(
          `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${params}`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => setStore({ articles: response }));
      },
    },
  };
};

export default getState;
