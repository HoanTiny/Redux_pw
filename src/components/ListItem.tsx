import React, { useState, Ref } from "react";
import "../App.css";

interface ListItemProps {
    id: number;
    title: string;
    thumbnailUrl: string;
    // innerRef?: Ref<HTMLLIElement>;
    // isLast?: boolean;
    page?: number; // Thêm page vào props interface
    // onToggleChange: any;
}

const ListItem: React.FC<ListItemProps> = ({
    id,
    title,
    thumbnailUrl,
    page,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const handleEdit = (): void => {
        setIsEditing(true);
    };

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // setIsEditing(false);
        setEditTitle(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.target.value);
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (event.keyCode === 13) {
            // Enter key pressed
            setIsEditing(false);
        }
    };
    const borderRadiusClass = id % 2 === 0 ? "even" : "odd";
    return (
        <div className={`list-item ${borderRadiusClass}`}>
            <div className="thumbnail">
                <img src={thumbnailUrl} alt={title} />
            </div>
            <div className="date">{Date.now()}</div>
            <div className="title">
                {isEditing ? (
                    <input
                        // ref={ref}
                        type="text"
                        value={editTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    <label onClick={handleEdit} className="editable">
                        {title}
                    </label>
                )}
            </div>
            {page !== undefined && <p>Page: {page}</p>}
        </div>
    );
};

export default ListItem;

// interface ListItemProps {
//     id: number;
//     title: string;
//     thumbnailUrl: string;
//     // innerRef?: Ref<HTMLLIElement>;
//     // isLast?: boolean;
//     page?: number; // Thêm page vào props interface
// }

// const ListItem = ({ id, title, thumbnailUrl, page }: ListItemProps) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editTitle, setEditTitle] = useState(title);

//     const handleEdit = (): void => {
//         setIsEditing(true);
//     };

//     const handleBlur = (): void => {
//         setIsEditing(false);
//         setEditTitle(title);
//     };

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEditTitle(event.target.value);
//     };

//     const handleKeyDown = (
//         event: React.KeyboardEvent<HTMLInputElement>
//     ): void => {
//         if (event.keyCode === 13) {
//             // Enter key pressed
//             setIsEditing(false);
//         }
//     };

//     const borderRadiusClass = id % 2 === 0 ? "even" : "odd";

//     return (
//         <div className={`list-item ${borderRadiusClass}`}>
//             <div className="thumbnail">
//                 <img src={thumbnailUrl} alt={title} />
//             </div>
//             <div className="date">{Date.now()}</div>
//             <div className="title">
//                 {isEditing ? (
//                     <input
//                         // ref={ref}
//                         type="text"
//                         value={editTitle}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         onKeyDown={handleKeyDown}
//                         autoFocus
//                     />
//                 ) : (
//                     <label onClick={handleEdit} className="editable">
//                         {title}
//                     </label>
//                 )}
//             </div>
//             {page !== undefined && <p>Page: {page}</p>}
//         </div>
//     );
// };

// export default ListItem;
