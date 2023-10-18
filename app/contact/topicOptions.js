"use client";
import { OptionDropdown, Option } from "app/admin/view/optionDropdown";
import { useState } from "react";

const TopicOptions = ({ defaultValue }) => {
    const [topic, setTopic] = useState(defaultValue || '--');

    return (
        <>
            <OptionDropdown name="Topic:" defaultValue={defaultValue} setChoice={setTopic}>
                <Option>General</Option>
                <Option>Technical Issue</Option>
                <Option>Partnership</Option>
                <Option>Academy Plus</Option>
                <Option>TypeSearch</Option>
                <Option>TypeChart</Option>
                <Option>Courses</Option>
                <Option>Resources</Option>
                <Option>Other</Option>
            </OptionDropdown>
            { topic === 'Other' && (
                <div>
                    <label className="register_label">Other Topic:</label>
                    <input type="text" name='other' required />
                </div>
            )}
        </>
    )
}

export default TopicOptions;