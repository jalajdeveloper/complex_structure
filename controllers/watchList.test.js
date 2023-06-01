const request = require("supertest");
const app = require("../app");

describe('Watch List Test', () => {
    it('Should Add The Movie Id  In Watch List', async () => {
        const res = await request(app)
          .post('/api/v1/movies/add-to-watch-list')
          .send({
            movieId: 552688
          })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('movieExist')
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toMatchObject({ msg: 'Movie is added in watchlist', movieExist: true })
      })
  })


  describe('Checking Watch List If Movie Exists OR Not Test', () => {
    it('Should Have Movie In Watch List', async () => {
        const res = await request(app)
          .get('/api/v1/movies/check-watch-list/552688')
         

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('movieExist')
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toMatchObject( {msg: "Movie Exists"  , movieExist: true})
      })
  })