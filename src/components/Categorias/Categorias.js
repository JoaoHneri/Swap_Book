import 'bootstrap/dist/css/bootstrap.min.css'
import '../Categorias/categorias.css'
import { AiFillHeart } from 'react-icons/ai'
import {GiPistolGun, GiMaterialsScience, GiScreaming } from 'react-icons/gi'
import {RiSpyFill} from 'react-icons/ri'
import {MdHistoryToggleOff} from 'react-icons/md'
import  {BsFillPersonBadgeFill} from 'react-icons/bs'
import {SiApachemaven} from 'react-icons/si'

function Categorias() {
  return (
    <div className="categories">
    <div className="container cont_edit">
      <div className="icons_cartegory text-center">
        <AiFillHeart className='icon'/> <p>Romance</p>
      </div>
      <div className="icons_cartegory text-center">
        <GiPistolGun className='icon'/> <p>Ação</p>
      </div>
      <div className="icons_cartegory text-center">
        <GiMaterialsScience className='icon '/> <p>Ficção</p>
      </div>
      <div className="icons_cartegory text-center">
        <RiSpyFill className='icon'/> <p>Suspense</p>
      </div>
      <div className="icons_cartegory text-center">
        <MdHistoryToggleOff className='icon'/> <p>História</p>
      </div>
      <div className="icons_cartegory text-center">
        <BsFillPersonBadgeFill className='icon'/> <p>Biografia</p>
      </div>
      <div className="icons_cartegory text-center">
        <GiScreaming className='icon'/> <p>Terror</p>
      </div>
      <div className="icons_cartegory text-center">
        <SiApachemaven className='icon' /> <p>Fantasia</p>
      </div>
    </div>
    </div>
  )
}

export default Categorias
