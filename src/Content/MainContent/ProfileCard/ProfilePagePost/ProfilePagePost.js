import c from "./ProfilePagePost.module.css"

const PostItem = (props) => {
    let post = props.mainProfile.posts.map((post) => {
        return (
            <div key={post.id}>
                <div>{post.name}</div>
                <div>{post.post}</div>
            </div>
        )
    })
    return (
        <div>{post}</div>
    )
}

const ProfilePagePost = (props) => {

    return (
        <div>
            <PostItem mainProfile={props.mainProfile} />
        </div>
    )
}

export default ProfilePagePost;