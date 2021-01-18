export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json([
    {
      name: 'Marshall Nathe',
      title: 'Real Estate Agent'
    },
    {
      name: ' Derrick Ziglar Jr.',
      title: 'Real Estate Agent'
    },
    {
      name: 'Ron Kuhn',
      title: 'Mortgage Consultant'
    }
  ])
}