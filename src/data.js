export const events = {
  jogjaNow: {
    title: 'Jogja Now 2022',
    date: '18 November 2022',
    registration: 'Registration Open'
  },
  wayangKulit: {
    title: 'Pagelaran Wayang Kulit',
    date: 'Sedang Berlangsung',
    registration: 'Free Registration'
  },
  jogjaUpcoming: {
    title: 'Jogja Upcoming Event 2023',
    date: '2 Januari 2023',
    registration: 'Free Registration'
  },
  gkTourism: {
    title: 'Gunungkidul Tourism Fest 2022',
    date: 'Sedang Berlangsung',
    registration: 'Registration Closed'
  }
}

export const categories = [
  {
    title: 'Terdekat di kotamu!',
    desc: 'Temukan keseruan tidak jauh dari lokasimu',
    events: ['jogjaNow', 'wayangKulit', 'jogjaUpcoming']
  },
  {
    title: 'Sedang berlangsung',
    desc: 'Datangi dan nikmati event yang sedang berlangsung',
    events: ['gkTourism', 'wayangKulit', 'jogjaUpcoming']
  }
]

export const tags = ['Terdekat', 'Konser', 'Budaya', 'Kuliner', 'Keagamaan', 'Pendidikan', 'Olahraga']
