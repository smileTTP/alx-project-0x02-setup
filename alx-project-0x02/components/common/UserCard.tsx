import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Name: {name}</h2>
        </div>
        <p className="text-gray-600">
            <div>Email: {email}</div>
            <div>City: {address.city}</div>
            <div>Street: {address.street}</div>
            <div>Suite: {address.suite}</div>
            <div>Zip Code: {address.zipcode}</div>
            <div>Latitude: {address.geo.lat}</div>
            <div>Longitude: {address.geo.lng}</div>
        </p>
        </div>
    )
}
export default UserCard;