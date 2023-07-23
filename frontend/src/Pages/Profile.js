import React from "react";
import FileUploader from "../component/FileUploader";
import FileUploader2 from "../component/FileUploader2";

function Profile() {
    return (
        <div>
            <div className="Profile-container">
                <div className="background-image">
                    <div className="profile-text">PET SITTER_PROFILE</div>
                </div>
                <div className="FileUploader-wrapper">
                    <FileUploader />
                </div>
                <div className="profile-inf">
                    프로필 정보/ 소개글/이름,연락처, 주소
                </div>
            </div>
            <div className="Profile-container2">
                <div className="FileUpLoader-certificate">
                    <FileUploader2 />
                    <div className="certificat-inf">
                        자격증명, 기관명, 취득일
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;
