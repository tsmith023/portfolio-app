import {
  DescriptionPopupProps,
  TechsPopupProps,
  WhoWithPopupProps
} from './types'

export const TechsPopup = (props: TechsPopupProps) => {
  const renderTechs = () => {
    return (
      <div className="flex flex-wrap justify-evenly">
        {
          props.techs.map((tech, idx) => (
            <a key={idx} href={tech.url} target="_blank"  className="my-1 btn btn-outline btn-success">{tech.name}</a>
          ))
        }
      </div>
    )
  }
  return (
    <>
      <label htmlFor={props.whichModal} className="btn btn-outline btn-success modal-button">{props.buttonName}</label>
      <input type="checkbox" id={props.whichModal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-success opacity-95">
          <label htmlFor={props.whichModal} className="btn btn-xs btn-success btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-2">{props.title}</h3>
          { renderTechs() }
        </div>
      </div>
    </>
  )
}

export const DescriptionPopup = (props: DescriptionPopupProps) => {
  return (
    <>
      <label htmlFor={props.whichModal} className="btn btn-outline btn-info modal-button btn-wide btn-lg">{props.title}</label>
      <input type="checkbox" id={props.whichModal} className="modal-toggle" />
      <div className="modal z-10">
        <div className="modal-box bg-success opacity-95">
          <label htmlFor={props.whichModal} className="btn btn-xs btn-success btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg mb-2">{props.subtitle}</h3>
          { props.description.split('\n').map((p, idx) => <p key={idx} className="mb-1">{p}</p>) }
        </div>
      </div>
    </>
  )
}

export const WhoWithPopup = (props: WhoWithPopupProps) => {
  return (
    <>
      <label htmlFor={props.whichModal} className="btn btn-outline btn-warning modal-button">{props.title}</label>
      <input type="checkbox" id={props.whichModal} className="modal-toggle" />
      <div className="modal z-10">
        <div className="modal-box bg-success opacity-95">
          <label htmlFor={props.whichModal} className="btn btn-xs btn-success btn-circle absolute right-2 top-2">✕</label>
          <p>{props.body}</p>
        </div>
      </div>
    </>
  )
}