<?php

// +----------------------------------------------------------------------
// | date: 2015-08-04
// +----------------------------------------------------------------------
// | AccessModel.php: 后端权限模型
// +----------------------------------------------------------------------
// | Author: yangyifan <yangyifanphp@gmail.com>
// +----------------------------------------------------------------------

namespace App\Model\Admin;

use \DB;

class AccessModel extends BaseModel {

    protected $table    = 'menu';//定义表名
    protected $guarded  = ['id'];//阻挡所有属性被批量赋值

    /**
     * 获得组合用户全部分类[组合好]
     *
     * @param null $role_id
     * @return array
     * @author yangyifan <yangyifanphp@gmail.com>
     */
    public static function getFullUserMenu($role_id = null){
        //加载函数库
        load_func('common');

        $role_id = self::getRoleId($role_id);

        $all_menu       = self::where('deleted_at', '=', '0000-00-00 00:00:00')->get();
        $all_user_menu  = self::getUserRelationMenu($role_id);

        if(!empty($all_menu)){
            foreach($all_menu as &$menu){
                $menu->checked = in_array($menu->id, $all_user_menu) ? true : false;
            }
        }
        //组合数据
<<<<<<< HEAD
        $all_menu = merge_tree_child_node(objToArray($all_menu));
        return arrayToObj($all_menu);
=======
        $all_menu = merge_tree_child_node(obj_to_array($all_menu));
        return array_to_obj($all_menu);
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
    }
    /**
     * 获得全部用户分类
     *
     * @param $role_id
     * @return mixed
     * @author yangyifan <yangyifanphp@gmail.com>
     */
    private static function getUserRelationMenu($role_id){
        return DB::table('role_relation_menu')->where('role_id', '=', $role_id)->lists('menu_id');
    }

    /**
     * 更新用户当前权限
     *
     * @param array $access_array
     * @param null $role_id
     * @return bool
     * @author yangyifan <yangyifanphp@gmail.com>
     */
    public static function updateUserAccess(Array $access_array = null, $role_id = null){
        //删除会员当前全部新闻分类
        self::deleteUserAccess($role_id);

        if(!empty($access_array)){
            //加载函数库
            load_func('common');

            $role_id = self::getRoleId($role_id);

            foreach($access_array as $access){
                if($access <= 0 ) continue;

                DB::table('role_relation_menu')->insertGetId([
                    'role_id'   => $role_id,
                    'menu_id'   => $access,
                ]);
            }
        }
        return true;
    }

    /**
     * 删除会员当前全部新闻分类
     *
     * @param null $user_id
     * @return mixed
     * @author yangyifan <yangyifanphp@gmail.com>
     */
    private static function deleteUserAccess($role_id = null){
        return DB::table('role_relation_menu')->where('role_id', '=', self::getRoleId($role_id))->delete();
    }

}
