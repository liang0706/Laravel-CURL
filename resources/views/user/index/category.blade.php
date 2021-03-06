<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    @section('base_header')
    @include('home.block.base_header')
    @show
</head>

<body>
<!-- top -->
<div class="top">
    @section('header')
    @include('user.block.header')
    @include('home.block.top')
    @show


</div>
<!-- end top -->
<!-- main -->
<div class="main">

    <div class="content">
        <div class="c_qiehuan">
            <!---->
            <div class="c_q_title">
                <ul>
                    <li><a href="<?php echo action('User\IndexController@getIndex') ;?>"  >综合导航</a></li>
                    <li><a href="" class="select_a">分类</a></li>
                </ul>

                <div class="clear"></div>
            </div>
            <div class="index-box">
                <!---->
                <div class="subm" style="border: 0;margin: 0;">
                    <div class="subbox subb0 subbfr">
                        <div class="bd">

                            <dl>
                                <dt>[网址分类]</dt>
                                <dd>
                                    <ul>
                                        <?php if($all_site_category):?>
                                            <?php foreach($all_site_category as $category):?>
                                                <li><a href="<?php echo action('User\IndexController@getInfo', [$category->id]) ;?>" target="_blank"><?php echo $category->cat_name;?></a></li>
                                            <?php endforeach;?>
                                        <?php endif;?>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
        </div>




    </div>
</div>
<!-- end main -->



<!-- footer -->
@section('footer')
@include('home.block.footer')
@show
<!-- end footer -->
</body>
</html>
