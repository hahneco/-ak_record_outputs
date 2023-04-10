import  usePersist  from '../Persist'
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

function MemoPage() {
  const [mode, setMode] = usePersist('mode', 'default')

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm />
        <FindForm />
        <DelForm />
      </div>
      <Memo />
    </div>
  )
}

export default MemoPage
