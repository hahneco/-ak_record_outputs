import React, { useState, useEffect } from "react";
import usePersist from "../Persist";

// memoを作成するためのフォーム

function AddForm(props) {
  const [memo, setMemo] = usePersist("memo", [])
  const [message, setMessage] = useState('')

  const doChange = (e) => {
    setMessage(e.target.value)
  }

  const doAction = (e) => {
    const data = {
      message: message,
      created: new Date()
    }
    memo.unshift(data)
    setMemo(memo) // memoステート変更(永続化された値)
    setMessage('') // messageを一旦クリア
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" className="form-control-sm col"
          onChange={doChange} value={message} required />
        <input type="submit" value="Add"
          className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default AddForm
