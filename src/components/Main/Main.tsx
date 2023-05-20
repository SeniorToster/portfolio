import main from '../../config/main.json'

interface Main {
    banner: string
}



export const Main = () => {
    const {banner, name, avatar,nickname } = main
    return (
        <div>
            <img src={banner} alt='баннер'  />
            <div>
                <img src={avatar} alt='аватар'/>
                <button>Send</button>
            </div>
            <div>
                <div>{name}</div>
                <div>{nickname}</div>
            </div>
            <div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </div>
        </div>
    );
};
