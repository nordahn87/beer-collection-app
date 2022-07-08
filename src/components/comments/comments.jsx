import { useState } from "react"

const Comments = () => {

    const [commentValue, setCommentValue] = useState('')
    const [commentValues, setCommentValues] = useState([])
    const [commentErr, setCommentErr] = useState('')

    const commitComment = () => {
        if (handleValidation() === false) {
            return false
        }

        setCommentValues([...commentValues, commentValue])
        handleReset()
    }

    //Problem child :(
    const deleteComment = (index) => {
        let tmpComment = commentValues
        tmpComment.splice(index, 1)
        setCommentValues([...commentValues])
        console.log(index)
    }

    const handleValidation = () => {
        if (commentValue === '') {
            setCommentErr("Please write a comment")
            return false
        } else {
            setCommentErr('')
        }
    }

    const handleReset = () => {
        setCommentValue('')
    }

    return (
        <section className="flex flex-col border mt-6 p-6">
            <h2 className="font-bold">Comment</h2>
            <h3 className="text-red-600">{commentErr}</h3>
            <div className="comment-container">
                <ul>
                    {
                        commentValues.map((comment, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex items-center my-3">
                                    <i className="las la-user mr-3 w-[30px] rounded-full flex justify-center items-center h-[30px] bg-gray-200"></i>
                                    {comment}
                                    <button
                                        className="bg-red-100 p-3 rounded-xl ml-6"
                                        onClick={() => deleteComment(index)}>
                                        slet
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

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
