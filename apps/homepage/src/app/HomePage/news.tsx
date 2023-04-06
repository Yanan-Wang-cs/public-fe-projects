
export default function News() {
  console.log('!!!!', cv_index)
  return (
    <div className="flex flex-row">
      <h2>{cv_index.news.title}</h2>
      <div>
        <ul>
          {
            cv_index.news.list.map((item, index) => {
              return <li key={index} dangerouslySetInnerHTML={{__html: item}} />
            })
          }
        </ul>
      </div>
    </div>
  )
}