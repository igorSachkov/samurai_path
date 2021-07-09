import c from "./ProfilePagePost.module.css"
const ProfilePagePost = function (props) {

    let postsArray = [
        { id: 1, ava: "avatar", post: "Что ты там делаешь?", likes: 34 },
        { id: 2, ava: "avatar", post: "Как дела?", likes: 5 }
    ]

    let postsRelease = postsArray.map((post) => {
        return (
            <div className={c.postContainer} key={post.id}>
                <div>
                    {post.ava}
                </div>
                <div>
                    {post.post}
                </div>
                <div>
                    {post.likes}
                </div>
            </div>
        )
    })



    return (
        <div>
            {postsRelease}
        </div>
        

    )
}

export default ProfilePagePost;