// A mock function to mimic making an async request for data
export function fetchSectors() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            title: "Sector 1",
            pictureUrl: "image/sector1.jpg",
          },
          {
            title: "Sector 2",
            pictureUrl: "image/sector2.jpg",
          },
          {
            title: "Sector 3",
            pictureUrl: "image/sector3.jpg",
          },
        ]),
      500
    )
  );
}
