import { useState } from "react"

const Comments = () => {

    const [commentValue, setCommentValue] = useState('')

    return (
        <section className="flex flex-col">
            <h2>Comment Component</h2>
            <input
                type="textarea"
                className="bg-gray-200"
                value={commentValue}
                onChange={(e) => { setCommentValue(e.target.value) }} />
            <button className="bg-blue-300 w-[200px] p-4 rounded-3xl hover:bg-blue-400 transition-all">
                Post comment
            </button>
        </section>
    )
}

export default Comments