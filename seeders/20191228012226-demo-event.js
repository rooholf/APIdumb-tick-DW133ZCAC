"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("events", [
      {
        title: "Kunto Aji Live Ciputat",
        category: 2,
        price: 65000,
        desc: "konser Maskun di ciputat yang batal di minta jatah ormas",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        address: "Depan Bootcamp",
        img:
          "https://upload.wikimedia.org/wikipedia/id/0/0b/Kunto_Aji_-_Mantra_Mantra.jpeg",
        urlMaps: "https://goo.gl/maps/U1X63YrYuNeFxF2QA",
        phone: "08193123123",
        email: "raisa@gmail.com",
        start: "2019-12-28 18:00:00",
        end: "2019-12-30 23:00:00",
        userId: 2
      },
      {
        title: "Raisa live in concert",
        category: 2,
        price: 60000,
        desc: "raisa live in concert",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        address: "Gelora bung karno",
        img:
          "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG",
        urlMaps: "https://goo.gl/maps/U1X63YrYuNeFxF2QA",
        phone: "08193123123",
        email: "raisa@gmail.com",
        start: "2019-12-29 18:00:00",
        end: "2019-12-30 23:00:00",
        userId: 2
      },
      {
        title: "Isyana Live in Concert Bandung 2020",
        category: 2,
        price: 60000,
        desc: "isyana live in concert",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        address: "Gelora bung karno",
        img: "https://i.ytimg.com/vi/2JhE2ua99b0/maxresdefault.jpg",
        urlMaps: "https://goo.gl/maps/U1X63YrYuNeFxF2QA",
        phone: "08193123123",
        email: "raisa@gmail.com",
        start: "2019-12-30 18:00:00",
        end: "2019-12-30 23:00:00",
        userId: 2
      },
      {
        title: "Jalan Santuy keliling GOR",
        category: 1,
        price: 20000,
        desc: "Kuy jalan santuy sapa tau ketemu ughtea",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        address: "Gelora bung karno",
        img: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
        urlMaps: "https://goo.gl/maps/U1X63YrYuNeFxF2QA",
        phone: "08193123123",
        email: "raisa@gmail.com",
        start: "2019-12-31 18:00:00",
        end: "2019-12-30 23:00:00",
        userId: 2
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete("events", null, {});
  }
};
