<?php $__env->startSection('title', $currentPage->title); ?>

<?php $__env->startSection('content'); ?>

	<?php echo e($currentPage->description); ?>


<?php $__env->stopSection(); ?>
<?php echo $__env->make('master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>