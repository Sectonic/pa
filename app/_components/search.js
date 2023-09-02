import { Children } from "react"

export const SearchContainer = ({children, query}) => {

    if (!query) {
        return children;
    }

    return (
        <>
            {Children.map(children, child => {
                var newChild = Children.toArray(child.props.children)[0];
                if (newChild.props.tag.toLowerCase().includes(query.toLowerCase()) || newChild.props.title.toLowerCase().includes(query.toLowerCase())) {
                    return child;
                }

                for (let i = 0; i < newChild.props.extraTags.length; i++) {
                    const tag = newChild.props.extraTags[i];
                    if (tag.toLowerCase().includes(query.toLowerCase())) {
                        return child;
                    }
                }
            })}
        </>
    )
}

export const IntroCourse = ({children, color, title, comingSoon}) => {
    var systemColor = color ? 'learn_system learn_system-' + color : 'learn_system';
    systemColor += comingSoon ? ' learn_system-soon' : '';
    const children_arr = Children.toArray(children);
    return (
        <div className={systemColor}>
            { comingSoon && <div className="learn_system-soon-tag">Coming Soon</div>}
            <div className="learn_system-tag">Introduction Course</div>
            <div className="learn_system-title">{title}</div>
            <div className="learn_system-description">{children_arr[0]}</div>
            <div className="learn_system-image">
                {children_arr[1]}
            </div>
        </div>
    )
}

IntroCourse.defaultProps = {
    tag: 'Introduction Course',
    extraTags: []
}

export const TypologySystem = ({children, color, title, comingSoon}) => {
    var systemColor = color ? 'learn_system learn_system-' + color : 'learn_system';
    systemColor += comingSoon ? ' learn_system-soon' : '';
    const children_arr = Children.toArray(children);
    return (
        <div className={systemColor}>
            { comingSoon && <div className="learn_system-soon-tag">Coming Soon</div>}
            <div className="learn_system-tag">Typology System</div>
            <div className="learn_system-title">{title}</div>
            <div className="learn_system-description">{children_arr[0]}</div>
            <div className="learn_system-image">
                {children_arr[1]}
            </div>
        </div>
    )
}

TypologySystem.defaultProps = {
    tag: 'Typology System',
    extraTags: []
}