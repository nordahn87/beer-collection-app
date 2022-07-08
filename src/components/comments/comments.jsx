import { useState } from "react"

const Comments = () => {

    const [commentValue, setCommentValue] = useState('')
    const [commentValues, setCommentValues] = useState([])
    
    const commitComment = () => {
        setCommentValues(commentValue)
    }

    return (
        <section className="flex flex-col">
            <h2 className="font-bold">Comment</h2>
            <div className="comment-container">
                <p>{commentValues}</p>
            </div>
            <input
                type="textarea"
                className="bg-gray-200"
                value={commentValue}
                onChange={(e) => { setCommentValue(e.target.value) }} />
            <button
                className="bg-blue-300 w-[200px] p-4 rounded-3xl hover:bg-blue-400 transition-all"
                onClick={commitComment}>
                Post comment
            </button>
        </section>
    )
}

export default Comments
