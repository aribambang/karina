const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

let DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Institut Teknologi Sumatera',
    description:
      'Institut Teknologi Sumatera adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung.',
    imageUrl:
      'https://cdn2.tstatic.net/lampung/foto/bank/images/danau-itera_20180528_192559.jpg',
    address:
      'Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung',
    location: { lat: -5.3582643, lng: 105.3148495 },
    creator: 'u1',
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id', 404);
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id', 404)
    );
  }
  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description, address } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;
  updatedPlace.address = address;

  DUMMY_PLACES[placeIndex] = updatedPlace;
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: 'Deleted place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
