import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
      {
        id: 0,
        user_id: 0,
        username: 'flinstone',
        caption: 'Look at my car...',
        image: 'https://i2-prod.dailyrecord.co.uk/incoming/article7654574.ece/ALTERNATES/s615/JS85806405.jpg',
        timestamp: 1573400990000
      },
      {
        id: 1,
        user_id: 1,
        username: 'scoobydoo',
        caption: 'Pizza',
        image: 'https://fyeahscoobydoomi.files.wordpress.com/2014/03/vlcsnap-00126.jpg',
        timestamp: 1605023390000
      },
      {
        id: 2,
        user_id: 2,
        username: 'goku',
        caption: 'kaaaameeehaaameeehaaaa',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28cc9e00-7b75-4f93-88f8-42c6d93a1897/daezsnd-2b6175d9-0769-4125-a707-a8b30d47f7c5.jpg/v1/fill/w_1024,h_725,q_75,strp/kamehameha___goku_poster_art_by_jazylh_daezsnd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI1IiwicGF0aCI6IlwvZlwvMjhjYzllMDAtN2I3NS00ZjkzLTg4ZjgtNDJjNmQ5M2ExODk3XC9kYWV6c25kLTJiNjE3NWQ5LTA3NjktNDEyNS1hNzA3LWE4YjMwZDQ3ZjdjNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LQ2jKl56q2I71qoU4gwMgpd_y9b6Q-Hy8YoPPpMwWLE',
        timestamp: 1581349790000
      }
    ]
  },
  getters: {
  },
  mutations: {
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') !== null) {
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
      }
    },
    login (state, token) {
      state.isAuthenticated = true
      localStorage.setItem('jwt', token)
      router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false
      localStorage.removeItem('jwt')
      router.push('/login')
    }
  },
  actions: {
  }
})
