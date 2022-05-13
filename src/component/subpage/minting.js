import React, { useState } from 'react';
import './subpage.css';

const Minting = () => {
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => { setImageSrc(reader.result); resolve();
            };
        });
    };

    return(
        <div className="mintingwrap">
            <h4 className="minttext">Minting</h4>
            <div className="mintcontent">
                <div className="col-12 py-3 mintcondition">
                    <span className="form-control" id="resultbrowsers"></span>
                </div>
                <div className="input-group mb-3 mintid">
                    <div className="input-group-prepend">
                        <span className="input-group-text">계정</span>
                    </div>
                    <span className="form-control input-group-append" id="showAccount"></span>
                </div>
                <div className="mintname">
                    <label htmlFor="name" className="mintname_1">발행자</label>
                    <input type="text" className="mintname_2" id="name" placeholder="발행자를 입력해주세요."></input>
                </div>
                <div className="mintimg">
                    <label htmlFor="uploadfile" className="mintimg1">이미지</label>
                    <input type="file" className="mintimg2" id="uploadfile" onChange={(e) => {encodeFileToBase64(e.target.files[0]); }} />
                    <div className="filepreview">
                        {imageSrc && <img src={imageSrc} alt="preview-img" />}
                    </div>
                    <button type="button" className="btn btn-secondary btn-flat uploadbtn" id="btn_uploadfile">
                            Upload
                    </button>
                </div>
                <small className="text-muted"><a id="ipfs_file_url" target="_blank"></a></small>
                <div className="mincate">
                    <label htmlFor="category" className="mincate1">카테고리</label>
                    <select className="selectpicker form-control" name="category" id="category">
                        <option value="">선택하세요</option>
                        <option value="기본">기본</option>
                        <option value="중요">중요</option>
                        <option value="기타">기타</option>
                    </select>
                </div>
                <div className="mintdes">
                    <label htmlFor="description" className="form-label mintdes1">설명</label>
                    <textarea className="form-control mintdes2" rows="3" id="description" placeholder="description을 입력하세요"></textarea>
                </div>
                <div className="col-12 divResponse">
                    <pre className="response"><span id="resultbox">Response API:</span></pre>
                </div>

                <div className="mintbtn">
                    <button type="button" className="btn btn-primary" id="bnt_mint">민팅하기</button>
                </div>
            </div>
        </div>
    )
}

export default Minting