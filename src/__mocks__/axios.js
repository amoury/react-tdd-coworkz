const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
  data: {
    "city": "Dubai",
    "country": "United Arab Emirates",
    "coordinates": "{lat: 25.2582, lng: 55.3047}"
  }
}

axiosMock.get.mockImplementation(req);

function req () {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse)
    }, 1000);
  })
};

export default axiosMock; 