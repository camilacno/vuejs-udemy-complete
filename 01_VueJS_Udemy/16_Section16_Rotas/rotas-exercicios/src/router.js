import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';

// import Usuario from './components/usuario/Usuario';
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
// import UsuarioEditar from './components/usuario/UsuarioEditar';
// import UsuarioLista from './components/usuario/UsuarioLista';

Vue.use(Router);

const Usuario = () =>
  import(/* webpackChunkName: "usuario" */ './components/usuario/Usuario');
const UsuarioLista = () =>
  import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioLista');
const UsuarioDetalhe = () =>
  import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioDetalhe');
const UsuarioEditar = () =>
  import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioEditar');

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 1000 };
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      name: 'inicio',
      path: '/',
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: '/usuario',
      components: {
        default: Usuario,
        menu: MenuAlt,
      },
      props: true,
      children: [
        { path: '', component: UsuarioLista },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log('antes da rota -> usuario detalhe');
            next();
          },
        },
        {
          path: ':id/editar',
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario',
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('antes das rotas => global');
  next();
});

export default router;
