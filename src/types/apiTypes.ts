export type resError =  {
  "status": boolean,
  "message": string
}

export interface reqSignup {
  "name": string;
  "email": string;
  "password": string;
  "phone": string;
  "birthday": string;
  "address": {
    "zipcode": number;
    "detail": string;
  }
}

export type resSignup = {
  "status": boolean,
  "token": string,
  "result": {
    "address": {
      "zipcode": number,
      "detail": string,
      "city"?: string,
      "county"?: string
    },
    "_id": string;
    "name": string;
    "email": string;
    "phone": string;
    "birthday": string;
    "createdAt": string;
    "updatedAt": string;
    "id": string;
  }
}

export type reqLogin = {
  "email": string;
  "password": string;
}

export type resLogin = resSignup

export type reqEmail = {
  "email": string;
}

export type resEmail = {
  "status": boolean,
  "result"?: {
    "isEmailExists": boolean
  }
}

export interface reqEditUder extends reqSignup {
  "userId": string
}

export type news = {
  "_id": string;
  "title": string;
  "description": string;
  "image": string;
  "createdAt": string;
  "updatedAt": string;
}

export type resNews = {
  "status": boolean;
  "result": news | news[]
}

export type culinary = {
  "_id": string;
  "title": string;
  "description": string;
  "diningTime": string;
  "image": string;
  "createdAt": string;
  "updatedAt": string;
}

export type resCulinary = {
  "status": boolean;
  "result": culinary | culinary[]
}

export type room = {
  "name": string;
  "description": string;
  "imageUrl": string;
  "imageUrlList": string[];
  "areaInfo": string;
  "bedInfo": string;
  "maxPeople": number;
  "price": number;
  "status": number;
  "layoutInfo": {"title": string, "isProvide": boolean}[];
  "facilityInfo": {"title": string, "isProvide": boolean}[];
  "amenityInfo": {"title": string, "isProvide": boolean}[];
  "_id": string;
  "createdAt": string;
  "updatedAt": string;
}

export type resRooms = {
  "status": boolean;
  "result": room | room[]
}